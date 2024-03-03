import {
  BindingKey,
  BindingScope,
  BindingTemplate,
  extensionFor,
  extensionPoint,
  extensions,
  Getter,
  injectable,
} from '@loopback/core';
import { HttpErrors } from '@loopback/rest';

export interface IGreetingExtension {
  lang: string;
  sayHello(name: string): string;
}

@extensionPoint(GreetingService.EXT_POINT_NAME)
@injectable({ scope: BindingScope.APPLICATION })
export class GreetingService {
  static BINDING_KEY = BindingKey.create<GreetingService>(
    `services.${GreetingService.name}`,
  );

  static EXT_POINT_NAME = GreetingService.name;
  static AS_EXTENSION: BindingTemplate = binding => {
    extensionFor(GreetingService.EXT_POINT_NAME)(binding);
    binding.tag({ namespace: GreetingService.EXT_POINT_NAME });
  };

  constructor(
    @extensions() private getExtensions: Getter<IGreetingExtension[]>,
  ) { }

  private async getExtensionByLang(
    lang = 'en',
  ): Promise<IGreetingExtension | undefined> {
    const extensions = await this.getExtensions();
    return extensions.find(x => x.lang === lang);
  }

  async sayHello(name: string, lang = 'en'): Promise<string> {
    const ext = await this.getExtensionByLang(lang);
    if (!ext) {
      throw new HttpErrors.NotFound('Language not found');
    }
    return ext.sayHello(name);
  }
}
