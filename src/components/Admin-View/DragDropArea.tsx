import type {Identifier, XYCoord} from 'dnd-core'
import {PropsWithChildren, useEffect, useRef} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend';
import CustomDragLayer from "./CustomDragLayer";
import {Box} from "@mui/material";

const ItemTypes = {
    CARD: 'card',
}

export interface DragDropAreaProps {
    index: number;
    id: number;
    moveCardAccordion: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
    index: number
    id: string
    type: string
}

export const DragDropArea = (props: PropsWithChildren<DragDropAreaProps>) => {
    const ref = useRef<HTMLDivElement>(null)

    const [{handlerId}, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = props.index

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            props.moveCardAccordion(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })

    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return {id: props.id, index: props.index}
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    // useEffect(() => {
    //     dragPreview(getEmptyImage())
    // }, []);

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (
        <Box ref={ref} data-handler-id={handlerId} sx={{opacity}}>
            {/*<CustomDragLayer />*/}
            {props.children}
        </Box>
    )
}
