import { LoadingSpinner } from "@/components/ui/loading_spinner";

export default function Loading() {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <LoadingSpinner color="#00a8f3" />
      </div>
    );
}