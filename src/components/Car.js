import React from "react";
import { useContext } from "react";
import { CarContext } from "./CarContext";
import ReactSpeedometer from "react-d3-speedometer";

export default function Car() {
  const { state, dispatchState } = useContext(CarContext);

  return (
    <div
      className="car"
      style={{
        textAlign: "center",
        filter: state.started ? "" : "saturate(0%)",
      }}
    >
      <ReactSpeedometer value={state.speed} height={180}></ReactSpeedometer>

      <button onClick={() => dispatchState({ type: "toggleOnOff" })}>
        On/Off
      </button>
      <button onClick={() => dispatchState({ type: "accelerate" })}>
        Accelerate
      </button>
      <button onClick={() => dispatchState({ type: "brake" })}>Brake</button>
    </div>
  );
}
