import IconsComponent from '@/components/icoscomponent';
import StartComponent from '@/components/startcomponent';

export default function Home() {
  return (
    <main className="min-w-full flex flex-col items-center">
      <StartComponent />
      <IconsComponent />
    </main>
  );
}