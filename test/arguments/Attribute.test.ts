import TerraformGeneratorUtils from '../../src/TerraformGeneratorUtils';
import { Attribute, attr } from '../../src';
import { resource } from '..';

test('Attribute invalid args', () => {
  expect(() => new Attribute(null, null)).toThrow();
  expect(() => new Attribute(resource, null)).toThrow();
  expect(() => new Attribute(null, 'x')).toThrow();
  expect(() => new Attribute(null, '')).toThrow();
  expect(() => new Attribute(null, ' ')).toThrow();
});

test('Attribute', () => {
  expect(new Attribute(resource, 'x').toString()).toBe(TerraformGeneratorUtils.escape('type.name.x'));
});

test('attr', () => {
  expect(attr(resource, 'x').toString()).toBe(TerraformGeneratorUtils.escape('type.name.x'));
});
