import { injectable } from '@loopback/core';
import { GreetingService, IGreetingExtension } from '../services';

@injectable(GreetingService.AS_EXTENSION)
export class GreetingExtentionEN implements IGreetingExtension {
  lang: string = 'en';

  sayHello(name: string): string {
    return `Hello ${name}`;
  }
}
