import { injectable } from '@loopback/core';
import { GreetingService, IGreetingExtension } from '../services';

@injectable(GreetingService.AS_EXTENSION)
export class GreetingExtentionDE implements IGreetingExtension {
  lang: string = 'de';

  sayHello(name: string): string {
    return `Hallo ${name}`;
  }
}
