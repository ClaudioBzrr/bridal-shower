import html2canvas from 'html2canvas';
import { Button } from '../components/Button';
import { Invite } from '../components/Invite';
import toast from 'react-hot-toast';

export function Share() {
  async function generateImage() {
    const canvas = await html2canvas(document.querySelector('#invite')!, {
      removeContainer: true,
    });
    const base64 = canvas.toDataURL('image/png');
    return base64;
  }

  async function shareInvite() {
    try {
      const response = await fetch(await generateImage());
      const blob = await response.blob();
      const file = new File([blob], 'share.png', { type: blob.type });
      await navigator.share({
        title: 'Convite para nosso Chá de Cozinha',
        text: `Te convido a participar do nosso chá de cozinha, confirme sua presença em ${window.location}`,
        files: [file],
      });
    } catch (err) {
      toast.error(String(err), { duration: 2000 });
    }
  }

  return (
    <div className="flex min-h-screen max-w-[100vw] flex-col items-center justify-center bg-slate-900">
      <Invite />
      <div className="mt-12 w-48 max-w-lg">
        <Button title="Compartilhar" primary onClick={shareInvite} />
      </div>
    </div>
  );
}
