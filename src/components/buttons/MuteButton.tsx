import { DialogButton } from "@decky/ui";
import { useDiscdeckState } from "../../hooks/useDiscdeckState";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { call } from "@decky/api";

export function MuteButton() {
  const state = useDiscdeckState();

  if (state?.me?.is_muted) {
    return (
      <DialogButton
        onClick={() => {
          call("toggle_mute");
        }}
        style={{
          height: "40px",
          width: "40px",
          minWidth: 0,
          padding: "10px 12px",
          marginRight: "10px",
        }}
      >
        <FaMicrophoneAltSlash />
      </DialogButton>
    );
  }
  return (
    <DialogButton
      onClick={() => {
        call("toggle_mute");
      }}
      style={{
        height: "40px",
        width: "40px",
        minWidth: 0,
        padding: "10px 12px",
        marginRight: "10px",
      }}
    >
      <FaMicrophoneAlt />
    </DialogButton>
  );
}
