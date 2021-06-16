import {Role} from './enumrole';

export function ModeratorAccess(constructorFn: Function):void{
    constructorFn.prototype.role = Role.Moderator;
}

export function forModerator(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function (param) {
      const args = [];
      if(!param.access)
          param.access = [];
      param.access.push(Role.Moderator);
      args.push(param);
      return originalFn.apply(this, args);
    };
  }