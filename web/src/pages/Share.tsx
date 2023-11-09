import { Button } from '../components/Button';
import { Invite } from '../components/Invite';
import SharedImage from '../assets/images/we-2.png';

import toast from 'react-hot-toast';

export function Share() {
  // async function generateImage() {
  //   window.scrollTo(0, 0);
  //   const canvas = await html2canvas(document.querySelector('#invite')!);
  //   const base64 = canvas.toDataURL('image/png');
  //   return base64;
  // }

  async function shareInvite() {
    try {
      const urlToShare = window.location.href.replace('/share', '');
      const response = await fetch(SharedImage);
      const blob = await response.blob();
      const file = new File([blob], 'share.png', { type: blob.type });
      await navigator.share({
        title: 'Convite para nosso Chá de Cozinha',
        url: urlToShare,
        text: `É com muito carinho que te convidamos a participar do nosso chá de cozinha, confirme sua presença em ${urlToShare}`,
        files: [file],
      });
    } catch (err) {
      toast.error(String(err), { duration: 2000 });
    }
  }

  return (
    <div className="flex min-h-screen max-w-[100vw] flex-col items-center justify-center bg-slate-950 bg-[url('../assets/images/background.png')] bg-cover bg-center bg-no-repeat">
      <Invite />
      <div className="mt-12 w-48 max-w-lg">
        <Button title="Compartilhar" primary onClick={shareInvite} />
      </div>
    </div>
  );
}
