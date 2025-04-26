// client/src/App.js
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";

const socket = io("https://founder-networking-parking-ethics.trycloudflare.com/");

function Call() {
    const [me, setMe] = useState("");
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true,
            }, }).then((stream) => {
            setStream(stream);
            if (myVideo.current) {
                myVideo.current.srcObject = stream;
            }
        });

        socket.on("connect", () => {
            setMe(socket.id);
        });

        socket.on("receive-call", (data) => {
            setReceivingCall(true);
            setCaller(data.from);
            setCallerSignal(data.signal);
        });
    }, []);

    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream,
        });

        peer.on("signal", (data) => {
            socket.emit("call-user", {
                userToCall: id,
                signalData: data,
                from: me,
            });
        });

        peer.on("stream", (currentStream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = currentStream;
            }
        });

        socket.on("call-answered", (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });

        connectionRef.current = peer;
    };

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream,
        });

        peer.on("signal", (data) => {
            socket.emit("answer-call", { signal: data, to: caller });
        });

        peer.on("stream", (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(callerSignal);
        connectionRef.current = peer;
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>📞 Video Call App</h2>
            <div>
                <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />
                {callAccepted && <video playsInline ref={userVideo} autoPlay style={{ width: "300px" }} />}
            </div>
            <p>Your ID: {me}</p>

            <input
                type="text"
                placeholder="Enter ID to call"
                onChange={(e) => setCaller(e.target.value)}
            />
            <button onClick={() => callUser(caller)}>Call</button>

            {receivingCall && !callAccepted && (
                <div>
                    <h3>{caller} is calling...</h3>
                    <button onClick={answerCall}>Answer</button>
                </div>
            )}
        </div>
    );
}

export default Call;
