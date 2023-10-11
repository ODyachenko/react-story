import { FC, useEffect, useState } from 'react';
import { VolumeBtn } from '../../UI/VolumeBtn/VolumeBtn';
import sound from '../../assets/media/sunrise.mp3';

export const Soundtrack: FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audio = new Audio(sound);
  audio.loop = !isMuted;

  useEffect(() => {
    document.documentElement.addEventListener('click', function () {
      audio.loop = !isMuted;
      audio.play();
    });
  }, []);

  const onClick = () => {
    audio.loop = true;
    if (isMuted) {
      audio.loop = true;
      audio.muted = false;
      audio.play();
      setIsMuted(false);
    } else {
      audio.loop = false;
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      <VolumeBtn onClick={onClick} isMuted={isMuted} />
    </>
  );
};
