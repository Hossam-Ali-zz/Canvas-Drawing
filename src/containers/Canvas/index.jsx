import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { ChromePicker } from 'react-color';
import { Button, ButtonGroup } from 'reactstrap';
import Dropzone from 'react-dropzone';
import { downloadObjectAsJson } from '../../utils/helper';
import './styles.scss';

const Canvas = () => {
  const [background, setBackground] = useState({
    hsl: {
      h: 250.00000000000003,
      s: 0.05135888135415024,
      l: 0.49478823,
      a: 1,
    },
    hex: '#7a7885',
    rgb: {
      r: 122,
      g: 120,
      b: 133,
      a: 1,
    },
    hsv: {
      h: 250.00000000000003,
      s: 0.0977,
      v: 0.5202,
      a: 1,
    },
    oldHue: 249.99999999999994,
    source: 'rgb',
  });

  const [lastSaved, setLastSaved] = useState('');
  const canvasRef = useRef();

  const handleColorChange = (data) => setBackground(data);

  const onDrop = (files) => {
    const reader = new FileReader();
    reader.onload = function () {
      const { result } = reader;
      setLastSaved(JSON.parse(result));
    };
    reader.readAsText(files[0]);
  };

  return (
    <>
      <div>
        <ButtonGroup className="button-actions">
          <Dropzone onDrop={onDrop} className="dropzone">
            <Button>Import</Button>
          </Dropzone>
          <Button
            onClick={() =>
              JSON.parse(canvasRef.current.getSaveData()).lines.length > 0
                ? downloadObjectAsJson(
                    canvasRef.current.getSaveData(),
                    'canvas'
                  )
                : {}
            }
          >
            Export
          </Button>
          <Button
            onClick={() =>
              localStorage.setItem(
                'savedDrawing',
                canvasRef.current.getSaveData()
              )
            }
          >
            Save
          </Button>
          <Button
            onClick={() =>
              setLastSaved(
                JSON.parse(
                  canvasRef.current.loadSaveData(
                    localStorage.getItem('savedDrawing')
                  )
                )
              )
            }
          >
            Load Last Saved
          </Button>
          <Button onClick={() => canvasRef.current.clear()}>Clear</Button>
          <Button onClick={() => canvasRef.current.undo()}>Undo</Button>
        </ButtonGroup>
      </div>
      <div className="canvas-container">
        <CanvasDraw
          className="canvas"
          brushColor={`rgba(${Object.values(background.rgb).toString()})`}
          brushRadius={2}
          ref={canvasRef}
          saveData={lastSaved}
        />
        <ChromePicker color={background.hsl} onChange={handleColorChange} />
      </div>
    </>
  );
};

export default Canvas;
