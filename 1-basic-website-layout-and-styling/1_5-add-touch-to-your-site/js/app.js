const swipeFrontElement = document.getElementById("dummyCircle");

const handleGestureStart = () => console.log('start');
const handleGestureMove = () => console.log('move');
const handleGestureEnd = () => console.log('end');

if (window.PointerEvent) {
  // Add Pointer Event Listener
  swipeFrontElement.addEventListener('pointerdown', handleGestureStart);
  swipeFrontElement.addEventListener('pointermove', handleGestureMove);
  swipeFrontElement.addEventListener('pointerup', handleGestureEnd);
  swipeFrontElement.addEventListener('pointercancel', handleGestureEnd);
} else {
  // Add Touch Listener
  swipeFrontElement.addEventListener('touchstart', handleGestureStart);
  swipeFrontElement.addEventListener('touchmove', handleGestureMove);
  swipeFrontElement.addEventListener('touchend', handleGestureEnd);
  swipeFrontElement.addEventListener('touchcancel', handleGestureEnd);

  // Add Mouse Listener
  swipeFrontElement.addEventListener('mousedown', handleGestureStart);
}
