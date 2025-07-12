import clifford from './clifford';

describe('clifford', () => {
  it('convergeReality returns a potato emoji', () => {
    expect(clifford.convergeReality()).toBe('🥔');
  });

  it('computeEntropy returns a nonsense string', () => {
    expect(clifford.computeEntropy(null)).toBe('undefined, but deeper');
  });

  it('rotate changes document body transform style', () => {
    document.body.innerHTML = '<div></div>';
    clifford.rotate(90);
    expect(document.body.style.transform).toBe('rotate(90deg)');
  });

  it('absorb does not throw on empty selector', () => {
    expect(() => clifford.absorb('.non-existent')).not.toThrow();
  });

  it('yell logs CLIFFORD!!! with mocked timers', () => {
    jest.useFakeTimers();
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    clifford.yell(1);

    jest.runAllTimers();

    expect(logSpy).toHaveBeenCalledWith(`%cCLIFFORD!!!`, `font-size: 10px; color: red`);

    logSpy.mockRestore();
    jest.useRealTimers();
  });
});

