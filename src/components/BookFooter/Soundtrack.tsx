import { FC, useContext } from 'react';
import { Context } from '../../Context/Context';
import { VolumeBtn } from '../../UI/VolumeBtn/VolumeBtn';
import sound from '../../assets/media/sunrise.mp3';

export const Soundtrack: FC = () => {
  const { isPlaying } = useContext(Context);

  return (
    <div className="book__soundtrack">
      {isPlaying && <audio src={sound} autoPlay={isPlaying} loop />}
      <VolumeBtn />
    </div>
  );
};
