import { Component, createBindingFromClass } from '@loopback/core';
import {
  GreetingExtentionDE,
  GreetingExtentionEN,
  GreetingExtentionFA,
} from '../extensions';

export class GreetingComponent implements Component {
  bindings = [
    createBindingFromClass(GreetingExtentionEN),
    createBindingFromClass(GreetingExtentionDE),
    createBindingFromClass(GreetingExtentionFA),
  ];
}
