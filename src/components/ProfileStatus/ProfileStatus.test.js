import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="test-status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("test-status");
  });

  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="test-status" />);
    const instance = component.root;

    expect(() => {
      const input = instance.findByType("input")
    }).toThrow();
  });

  test("after creation <p> should be contains correct status", () => {
    const component = create(<ProfileStatus status="test-status" />);
    const instance = component.root;
    const p = instance.findByType("p");
    expect(p.children[0]).toBe("test-status");
  });

  test("input should be displayed in editmode insted of p", () => {
    const component = create(<ProfileStatus status="test-status" />);
    const instance = component.root;
    const p = instance.findByType("p");
    p.props.onDoubleClick();

    const input = instance.findByType("input")
    expect(input.props.value).toBe("test-status");
  });

  test("callback shoulb be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="test-status" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});