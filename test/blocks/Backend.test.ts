import TerraformGeneratorUtils from '../../src/TerraformGeneratorUtils';
import { Backend } from '../../src';
import { arg4 } from '..';

test('Backend', () => {
  const backend = new Backend('name', arg4);
  expect(backend.toTerraform('0.11')).toMatchSnapshot();
  expect(backend.toTerraform('0.12')).toMatchSnapshot();
  expect(backend.asArgument().toTerraform()).toBe(TerraformGeneratorUtils.escape('"name"'));
  expect(() => backend.attr('attr')).toThrow();
});
