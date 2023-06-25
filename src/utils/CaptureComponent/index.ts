import html2canvas from 'html2canvas';

interface ICaptureComponentProps {
  componentRef: React.RefObject<any>;
  captureName: string;
}

export default function CaptureComponent({ componentRef, captureName }: ICaptureComponentProps) {
  const elementToRemove = componentRef.current.querySelector('.actions');
  //   const elementToHide = componentRef.current.querySelector('.actions');
  const parentElement = elementToRemove.parentNode;
  parentElement.removeChild(elementToRemove);
  html2canvas(componentRef.current).then((canvas: any) => {
    const link = document.createElement('a');
    link.download = captureName;
    link.href = canvas.toDataURL();
    link.click();

    parentElement.appendChild(elementToRemove);
  });
}
