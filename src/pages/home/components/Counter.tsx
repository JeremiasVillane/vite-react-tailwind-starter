import useCounterStore from "@/store";
import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function Counter() {
  const { count, increaseCount, decreaseCount, resetCount } = useCounterStore();

  return (
    <section className="flex flex-col justify-center space-y-2">
      <div className="rounded-md border bg-blue-100 p-1 dark:bg-blue-300/60">
        Counter: {count}
      </div>

      <div className="flex items-center justify-items-center gap-3">
        <Button title="decreaseCount" onClick={() => decreaseCount()}>
          <MinusIcon />
        </Button>
        <Button title="resetCount" onClick={() => resetCount()}>
          <ResetIcon />
        </Button>
        <Button title="increaseCount" onClick={() => increaseCount()}>
          <PlusIcon />
        </Button>
      </div>
    </section>
  );
}
