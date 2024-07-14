// index.js
function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
      // Event listener logic
    });
  }
  
  // index.test.js (test file)
  const { expect } = require('chai');
  const sinon = require('sinon');
  
  describe("index.js", () => {
    let input;
    let button;
  
    beforeEach(function() {
      // Create a mock button element
      button = document.createElement('button');
      button.id = 'button';
      document.body.appendChild(button);
  
      // Spy on addEventListener method of the mock button
      input = sinon.spy(button, 'addEventListener');
    });
  
    afterEach(function() {
      // Clean up the mock button element and restore original method
      input.restore();
      button.remove();
    });
  
    it("binds an event listener in addingEventListener()", () => {
      addingEventListener(); // Call your function that should bind the event listener
  
      // Assert that addEventListener was called at least once
      expect(input.calledOnce).to.be.true;
  
      // Assert that addEventListener was called with 'click' event type
      expect(input.calledWith('click')).to.be.true;
    });
  });
  