/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */
import {MDCSelectionControlState} from '@material/selection-control';

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Checkbox. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCCheckboxAdapter {
  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /** @param {!EventListener} handler */
  registerAnimationEndHandler(handler) {}

  /** @param {!EventListener} handler */
  deregisterAnimationEndHandler(handler) {}

  /** @param {!EventListener} handler */
  registerChangeHandler(handler) {}

  /** @param {!EventListener} handler */
  deregisterChangeHandler(handler) {}

  /** @return {!MDCSelectionControlState} */
  getNativeControl() {}

  forceLayout() {}

  /** @return {boolean} */
  isAttachedToDOM() {}
}

export default MDCCheckboxAdapter;
