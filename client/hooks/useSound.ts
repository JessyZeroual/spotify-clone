import React from "react";
import { Audio } from "expo-av";

const useSound = (
  selectedId: string,
  setSelectedId: (string: string) => void,
  data: {
    id: string;
    name: string;
    artists: { id: string; name: string }[];
    previewUrl: string;
  }[]
): null => {
  const [sound, setSound] = React.useState<{
    setOnPlaybackStatusUpdate: (status: any) => void;
    unloadAsync: () => void;
    pauseAsync: () => void;
  } | null>(null);

  const currentItem = data.find((item) => item.id === selectedId);

  async function playSound() {
    const { sound: soundObj } = await Audio.Sound.createAsync({
      uri: currentItem?.previewUrl || ""
    });

    setSound(soundObj);

    await soundObj.playAsync();

    sound?.setOnPlaybackStatusUpdate(
      async (status: { didJustFinish: boolean }) => {
        if (status.didJustFinish === true) {
          setSelectedId("");
        }
      }
    );
  }

  React.useEffect(() => {
    if (selectedId) playSound();
  }, [selectedId]);

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return null;
};

export default useSound;
