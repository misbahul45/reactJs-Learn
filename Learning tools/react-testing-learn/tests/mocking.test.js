import { describe, expect, it, vi } from "vitest";

describe('sample mocking', () => {
  function hallo(name, callBack) {
    return callBack(name);
  }

  it('mock', () => {
    const callback = vi.fn();
    hallo("misbahul", callback);
    expect(callback).toHaveBeenCalledWith("misbahul");
  });
});

