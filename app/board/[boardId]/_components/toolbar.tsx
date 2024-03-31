import { Circle, MousePointer2, Pen, Redo2, Square, StickyNote, Type, Undo2 } from "lucide-react";
import { ToolButton } from "./tool-button";

export const Toolbar = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton
                    label="Select"
                    icon={MousePointer2}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Text"
                    icon={Type}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Sticky note"
                    icon={StickyNote}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Rectangle"
                    icon={Square}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Elipse"
                    icon={Circle}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Pen"
                    icon={Pen}
                    onClick={() => { }}
                    isActive={false}
                />


            </div>
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton
                    label="Undo"
                    icon={Undo2}
                    onClick={() => { }}
                    isDisabled={true}
                />
                <ToolButton
                    label="Redo"
                    icon={Redo2}
                    onClick={() => { }}
                    isDisabled={true}
                />
                <div>
                    Clear
                </div>
            </div>

        </div>
    );
};
export const ToolbarSkeleton = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4
        bg-white h-[360px] w-[52-px] shadow-md rounded-md"/>


    );
};