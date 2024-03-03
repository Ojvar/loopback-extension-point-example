import { inject } from '@loopback/core';
import { GreetingService } from '../services';
import { get, param } from '@loopback/rest';

export class GreetingController {
  constructor(
    @inject(GreetingService.BINDING_KEY)
    private greetingService: GreetingService,
  ) { }

  @get('/greeting/{name}')
  async greeting(
    @param.path.string('name') name: string,
    @param.query.string('lang') lang = 'en',
  ): Promise<string> {
    return this.greetingService.sayHello(name, lang);
  }
}
