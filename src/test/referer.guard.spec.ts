import { RefererGuard } from "../referer.guard";

describe('Referer guard test.', () => {

  const referers = ["*localhost*","*example.com"];

  it('Referer: localhost -> should return true', () => {
    const referer = "localhost";
    const valid = RefererGuard.validateReferer(referer, referers);
    expect(valid).toBe(true);
  });

  it('Referer: https://example.com -> should return true', () => {
    const referer = "https://example.com";
    const valid = RefererGuard.validateReferer(referer, referers);
    expect(valid).toBe(true);
  });

  it('Referer: invalid.com -> should return false', () => {
    const referer = "invalid.com";
    const valid = RefererGuard.validateReferer(referer, referers);
    expect(valid).toBe(false);
  });

  it('Referer: https://example.com/page -> should return false', () => {
    const referer = "https://example.com/page";
    const valid = RefererGuard.validateReferer(referer, referers);
    expect(valid).toBe(false);
  });

});
