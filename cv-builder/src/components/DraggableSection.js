import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const DraggableSection = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mb-4 p-4 bg-white rounded-lg shadow-sm"
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

