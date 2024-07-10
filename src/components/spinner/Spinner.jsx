import { SpinnerCircular } from "spinners-react";

export default function Spinner() {
  return (
    <SpinnerCircular
      size={70}
      thickness={180}
      speed={125}
      color="rgba(0, 0, 0, 1)"
      secondaryColor="rgba(0, 0, 0, 0.2)"
    />
  );
}
