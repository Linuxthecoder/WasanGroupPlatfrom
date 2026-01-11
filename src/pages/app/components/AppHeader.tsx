import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
    title: string;
}

const AppHeader = ({ title }: AppHeaderProps) => {
    return (
        <header className="bg-slate-900 border-b border-slate-800 h-16 flex items-center justify-between px-8 sticky top-0 z-10 text-white">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white hover:bg-slate-800">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
                </Button>
                <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700">
                        W
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">Wasan Trader</p>
                        <p className="text-xs text-slate-400">Verified Buyer</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
