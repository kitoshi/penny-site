import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
export default function DragDropList(props) {
  DragDropList.propTypes = {
    images: PropTypes.array
  }
  return (
    <DragDropContext>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {props.images.map((item, idx) => (
              <Draggable draggableId={item.id} index={idx} key={idx}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ListItem item={item} />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
