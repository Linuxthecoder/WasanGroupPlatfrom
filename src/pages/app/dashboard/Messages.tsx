import { useState } from "react";
import {
    Search,
    MoreVertical,
    Phone,
    Video,
    Image as ImageIcon,
    Paperclip,
    Smile,
    Send,
    Check,
    CheckCheck,
    Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/AppHeader";

const Messages = () => {
    const [activeChat, setActiveChat] = useState(1);

    const chats = [
        {
            id: 1,
            name: "Shenzhen Audio Tech",
            avatar: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
            lastMessage: "The samples will be shipped tomorrow.",
            time: "10:30 AM",
            unread: 2,
            online: true
        },
        {
            id: 2,
            name: "Guangzhou Textiles",
            avatar: "",
            initials: "GT",
            lastMessage: "Can you confirm the color code?",
            time: "Yesterday",
            unread: 0,
            online: false
        },
        {
            id: 3,
            name: "Global Logistics Co.",
            avatar: "",
            initials: "GL",
            lastMessage: "Your shipment has arrived at the port.",
            time: "Tue",
            unread: 0,
            online: true
        }
    ];

    const messages = [
        { id: 1, sender: "them", text: "Hello! Thank you for your inquiry regarding the Wireless Earbuds Pro.", time: "10:00 AM" },
        { id: 2, sender: "me", text: "Hi, I'm interested in ordering 500 units. What is your lead time?", time: "10:05 AM" },
        { id: 3, sender: "them", text: "For 500 units, the lead time is approximately 15 days.", time: "10:15 AM" },
        { id: 4, sender: "them", text: "We also have a sample ready if you'd like to test the quality first.", time: "10:16 AM" },
        { id: 5, sender: "them", text: "The samples will be shipped tomorrow.", time: "10:30 AM" }
    ];

    return (
        <div className="flex h-screen bg-[#F0F2F5]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AppHeader title="Messages" />

                <div className="flex-1 flex overflow-hidden">
                    {/* Chat List */}
                    <div className="w-80 md:w-96 bg-white border-r border-slate-200 flex flex-col">
                        <div className="p-4 border-b border-slate-100">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input placeholder="Search messages..." className="pl-9 bg-slate-50" />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {chats.map(chat => (
                                <div
                                    key={chat.id}
                                    onClick={() => setActiveChat(chat.id)}
                                    className={`p-4 flex gap-3 cursor-pointer hover:bg-slate-50 transition-colors ${activeChat === chat.id ? 'bg-blue-50/50 border-r-2 border-primary' : ''}`}
                                >
                                    <div className="relative">
                                        <Avatar>
                                            <AvatarImage src={chat.avatar} />
                                            <AvatarFallback>{chat.initials || chat.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                        </Avatar>
                                        {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className={`text-sm font-semibold truncate ${activeChat === chat.id ? 'text-primary' : 'text-slate-900'}`}>{chat.name}</h4>
                                            <span className="text-xs text-slate-500">{chat.time}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm text-slate-500 truncate max-w-[180px]">{chat.lastMessage}</p>
                                            {chat.unread > 0 && (
                                                <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-blue-600">
                                                    {chat.unread}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col bg-[#F0F2F5] relative">
                        {/* Chat Header */}
                        <div className="bg-white border-b border-slate-200 p-4 flex justify-between items-center shadow-sm z-10">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={chats[0].avatar} />
                                    <AvatarFallback>SA</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-bold text-slate-900 leading-none">Shenzhen Audio Tech</h3>
                                    <span className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Online
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="hidden md:flex gap-1">
                                    <Button variant="ghost" size="icon"><Phone className="w-5 h-5 text-slate-500" /></Button>
                                    <Button variant="ghost" size="icon"><Video className="w-5 h-5 text-slate-500" /></Button>
                                </div>
                                <Button variant="ghost" size="icon"><MoreVertical className="w-5 h-5 text-slate-500" /></Button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                            {messages.map(msg => (
                                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[75%] md:max-w-[60%] rounded-2xl p-4 shadow-sm ${msg.sender === 'me' ? 'bg-primary text-white rounded-br-none' : 'bg-white text-slate-800 rounded-bl-none'}`}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                        <div className={`text-[10px] mt-2 flex items-center justify-end gap-1 ${msg.sender === 'me' ? 'text-blue-100' : 'text-slate-400'}`}>
                                            {msg.time}
                                            {msg.sender === 'me' && <CheckCheck className="w-3 h-3" />}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="bg-white p-4 border-t border-slate-200">
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 px-3">
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 rounded-full h-8 w-8 hover:bg-slate-200/50">
                                    <Plus className="w-5 h-5" />
                                </Button>
                                <div className="h-6 w-px bg-slate-300 mx-1"></div>
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 rounded-full h-8 w-8 hover:bg-slate-200/50">
                                    <ImageIcon className="w-5 h-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 rounded-full h-8 w-8 hover:bg-slate-200/50">
                                    <Paperclip className="w-5 h-5" />
                                </Button>
                                <Input
                                    placeholder="Type your message..."
                                    className="flex-1 bg-transparent border-none focus-visible:ring-0 shadow-none px-2"
                                />
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 rounded-full h-8 w-8 hover:bg-slate-200/50">
                                    <Smile className="w-5 h-5" />
                                </Button>
                                <Button className="rounded-lg h-9 w-9 p-0 bg-primary hover:bg-blue-600 text-white shadow-sm">
                                    <Send className="w-4 h-4 ml-0.5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Messages;
