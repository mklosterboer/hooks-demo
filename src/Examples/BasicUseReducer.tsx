import React, { useReducer } from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { UnsavedChangesModal } from '../Components/UnsavedChangesModal';

interface basicUseReducerState {
    currentValueIdx: number;
    values: string[];
    inputValue: string;
    showModal: boolean;
    inputDirty: boolean;
    newSelectionIdx: number;
}

const intialState: basicUseReducerState = {
    currentValueIdx: 0,
    values: ["value 1", "value 2", "value 3"],
    inputValue: "value 1",
    showModal: false,
    inputDirty: false,
    newSelectionIdx: 0,
}

const BasicUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState);

    const handleSelection = (idx: number) => {
        if (state.currentValueIdx !== idx) {
            if (state.inputDirty) {
                dispatch({ type: 'openModal', newSelectionIdx: idx });
            } else {
                dispatch({ type: 'switchValues', idx });
            }
        }
    }

    const dropDownItems = state.values.map((value, idx) => (
        <Dropdown.Item
            key={idx}
            onClick={() => handleSelection(idx)}
            active={idx === state.currentValueIdx}
        >
            Value {idx + 1}
        </Dropdown.Item>
    ));

    return (
        <>
            <div className="form-container">
                <DropdownButton 
                    size="sm" 
                    id="valueDropDown"
                    title={`Value ${state.currentValueIdx + 1}`}
                >
                    {dropDownItems}
                </DropdownButton>
                <input
                    type="text"
                    className={state.inputDirty ? "invalid" : undefined}
                    value={state.inputValue}
                    onChange={e => { dispatch({ type: 'updateInput', value: e.target.value }) }}
                />
                <Button
                    size="sm"
                    variant="success"
                    onClick={() => dispatch({ type: 'save' })}
                >
                    Save
                </Button>
            </div>
            <UnsavedChangesModal
                show={state.showModal}
                onContinue={() => dispatch({ type: 'modalContinue' })}
                onCancel={() => dispatch({ type: 'modalCancel' })}
            />
        </>
    )
}

const reducer = (state: basicUseReducerState, action: any) => {
    let newState: basicUseReducerState = { ...state };
    switch (action.type) {
        case 'save':
            newState.values[state.currentValueIdx] = state.inputValue;
            newState.inputDirty = false;
            break;
        case 'switchValues':
            newState.currentValueIdx = action.idx;
            newState.inputValue = state.values[action.idx];
            newState.inputDirty = false;
            break;
        case 'updateInput':
            newState.inputValue = action.value;
            newState.inputDirty = true;
            break;
        case 'openModal':
            newState.showModal = true;
            newState.newSelectionIdx = action.newSelectionIdx;
            break;
        case 'modalContinue':
            newState.currentValueIdx = state.newSelectionIdx;
            newState.inputValue = state.values[state.newSelectionIdx];
            newState.inputDirty = false;
            newState.showModal = false;
            break;
        case 'modalCancel':
            newState.showModal = false;
            break;
        default:
            break;
    }
    return newState;
}

const basicUseReducerDesc = (
    <div>
        useReducer can be used to be more declarative with state changes. <br /><br />
        Instead of modifying state varibles directly in the component, you 'dispatch' actions to a
        reducer which contains state. The reducer then makes the changes and returns the new state back to the component;<br /><br />
        In this example, the drop down selector will switch an input between three values that can be saved. 
        If you try to switch to the other values without saving, you will get a modal that warns you you will lose the data and offers to continue or cancel. <br /><br />
        This helps to describe what you are trying to do and seperate it from actually doing it, i.e. modifying state. <br /><br />
        The modal is uncontrolled and just uses functions in the parent component.
    </div>
);

export const BasicUseReducerExample = {
    title: "Basic useReducer",
    description: basicUseReducerDesc,
    component: BasicUseReducer,
}