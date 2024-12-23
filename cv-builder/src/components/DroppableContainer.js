import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const DroppableContainer = ({ onDragEnd, children }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="resume-sections">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4"
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

