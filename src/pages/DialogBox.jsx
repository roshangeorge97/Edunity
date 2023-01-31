

function DialogBox({ onClose }) {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center">
      <div className="bg-black rounded-lg p-6">
        <h2 className="text-lg text-yellow font-medium mb-4">Add to Cart</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Quantity</label>
            <input type="number" className="bg-gray-200 rounded-lg p-2 w-full" />
          </div>
          <div className="flex justify-end">
            <button type="button" className="ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green" onClick={onClose}>
              Add
            </button>
            <button type="button" className="ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green-600" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DialogBox;

