import { injectable } from '@loopback/core';
import { GreetingService, IGreetingExtension } from '../services';

@injectable(GreetingService.AS_EXTENSION)
export class GreetingExtentionFA implements IGreetingExtension {
  lang: string = 'fa';

  sayHello(name: string): string {
    return `درود ${name}`;
  }
}
