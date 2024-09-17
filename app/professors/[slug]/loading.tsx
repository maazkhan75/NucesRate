import { LoadingSpinner } from "@/components/ui/loading_spinner";


export default function Loading() {
    return (
        <div className="flex justify-center items-center h-[50vh]">
            <LoadingSpinner />
        </div>
    );
}