// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { BaseComponentProps } from '../internal/base-component';
import { NonCancelableEventHandler } from '../internal/events';

export interface TabsProps extends BaseComponentProps {
  /**
   * Specifies the tabs to display. Each tab object has the following properties:
   *
   * - `id` (string) - The tab identifier. This value needs to be passed to the Tabs component as `activeTabId` to select this tab.
   * - `label` (ReactNode) - Tab label shown in the UI.
   * - `content` (ReactNode) - (Optional) Tab content to render in the container.
   * - `disabled` (boolean) - (Optional) Specifies if this tab is disabled.
   * - `href` (string) - (Optional) You can use this parameter to change the default `href` of the internal tab anchor. The
   *    `click` event default behavior is prevented, unless the user clicks the tab with a key modifier (that is, CTRL,
   *    ALT, SHIFT, META). This enables the user to open new browser tabs with an initially selected component tab,
   *    if your application routing can handle such deep links. You can manually update routing on the current page
   *    using the `activeTabHref` property of the `change` event's detail.
   */
  tabs: ReadonlyArray<TabsProps.Tab>;

  /**
   * The possible visual variants of tabs are the following:
   * * `default` - Use in any context.
   * * `container` - A variant with borders, for use alongside other containers.
   */
  variant?: TabsProps.Variant;

  /**
   * Called whenever the user selects a different tab.
   * The event's `detail` contains the new `activeTabId`.
   */
  onChange?: NonCancelableEventHandler<TabsProps.ChangeDetail>;

  /**
   * The `id` of the currently active tab.
   * * If you don't set this property, the component activates the first tab and switches tabs automatically when a tab header is clicked (that is, uncontrolled behavior).
   * * If you explicitly set this property, you must set define an `onChange` handler to update the property when a tab header is clicked (that is, controlled behavior).
   */
  activeTabId?: string;

  /**
   * Provides an `aria-label` to the tab container.
   * Don't use `ariaLabel` and `ariaLabelledby` at the same time.
   */
  ariaLabel?: string;

  /**
   * Sets the `aria-labelledby` property on the tab container.
   * If there's a visible label element that you can reference, use this instead of `ariaLabel`.
   * Don't use `ariaLabel` and `ariaLabelledby` at the same time.
   */
  ariaLabelledby?: string;

  /**
   * Determines whether the tab content has padding. If `true`, removes the default padding from the tab content area.
   */
  disableContentPaddings?: boolean;
}
export namespace TabsProps {
  export type Variant = 'default' | 'container';

  export interface Tab {
    /**
     * The tab id. This value will be need to be passed to the Tabs component as `activeTabId` to select this tab.
     */
    id: string;
    /**
     * Tab label shown in the UI.
     */
    label: React.ReactNode;
    /**
     * Tab content to render in the container.
     */
    content?: React.ReactNode;
    /**
     * Whether this tab is disabled.
     */
    disabled?: boolean;
    /**
     * You can use this parameter to change the default `href` of the internal tab anchor. The
     * `click` event default behavior is prevented, unless the user clicks the tab with a key modifier (CTRL,
     * ALT, SHIFT, META). This allows to open new browser tabs with an initially selected component tab,
     * when the routing can handle such deep links. You can manually update routing on the current page
     * using the `activeTabHref` property of the `change` event's detail.
     */
    href?: string;
  }

  export interface ChangeDetail {
    /**
     * The ID of the clicked tab.
     */
    activeTabId: string;
    /**
     * The `href` attribute of the clicked tab, if defined.
     */
    activeTabHref?: string;
  }
}