import * as _Modeler from 'bpmn-js/lib/Modeler.js';
import * as _PropertiesPanelModule from 'bpmn-js-properties-panel';
import * as _BpmnPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/bpmn';
import * as _EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import * as _PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';

export const Providers = {
  __init__: "__init__",
  __depends__: "__depends__",
  adaptiveLabelPositioningBehavior: "adaptiveLabelPositioningBehavior",
  alignElements: "alignElements",
  appendBehavior: "appendBehavior",
  attachSupport: "attachSupport",
  autoPlace: "autoPlace",
  autoPlaceSelectionBehavior: "autoPlaceSelectionBehavior",
  autoScroll: "autoScroll",
  bendpointMove: "bendpointMove",
  bendpoints: "bendpoints",
  bendpointSnapping: "bendpointSnapping",
  bpmnAutoResize: "bpmnAutoResize",
  bpmnAutoResizeProvider: "bpmnAutoResizeProvider",
  bpmnCopyPaste: "bpmnCopyPaste",
  bpmnDistributeElements: "bpmnDistributeElements",
  bpmnFactory: "bpmnFactory",
  bpmnGlobalConnect: "bpmnGlobalConnect",
  bpmnImporter: "bpmnImporter",
  bpmnjs: "bpmnjs",
  bpmnKeyBindings: "bpmnKeyBindings",
  bpmnOrderingProvider: "bpmnOrderingProvider",
  bpmnPropertiesProvider: "bpmnPropertiesProvider",
  bpmnRenderer: "bpmnRenderer",
  bpmnReplace: "bpmnReplace",
  bpmnReplacePreview: "bpmnReplacePreview",
  bpmnRules: "bpmnRules",
  bpmnSearch: "bpmnSearch",
  bpmnUpdater: "bpmnUpdater",
  canvas: "canvas",
  changeSupport: "changeSupport",
  clipboard: "clipboard",
  commandStack: "commandStack",
  config: "config",
  connect: "connect",
  connectionDocking: "connectionDocking",
  connectionSegmentMove: "connectionSegmentMove",
  contextPad: "contextPad",
  contextPadProvider: "contextPadProvider",
  copyPaste: "copyPaste",
  copyPasteBehavior: "copyPasteBehavior",
  create: "create",
  createBoundaryEventBehavior: "createBoundaryEventBehavior",
  createDataObjectBehavior: "createDataObjectBehavior",
  createParticipantBehavior: "createParticipantBehavior",
  dataInputAssociationBehavior: "dataInputAssociationBehavior",
  defaultRenderer: "defaultRenderer",
  deleteLaneBehavior: "deleteLaneBehavior",
  directEditing: "directEditing",
  distributeElements: "distributeElements",
  dragging: "dragging",
  dropOnFlowBehavior: "dropOnFlowBehavior",
  editorActions: "editorActions",
  elementFactory: "elementFactory",
  elementRegistry: "elementRegistry",
  eventBus: "eventBus",
  globalConnect: "globalConnect",
  graphicsFactory: "graphicsFactory",
  handTool: "handTool",
  hoverFix: "hoverFix",
  importDockingFix: "importDockingFix",
  interactionEvents: "interactionEvents",
  keyboard: "keyboard",
  labelBehavior: "labelBehavior",
  labelEditingPreview: "labelEditingPreview",
  labelEditingProvider: "labelEditingProvider",
  labelSupport: "labelSupport",
  lassoTool: "lassoTool",
  layouter: "layouter",
  moddle: "moddle",
  modeling: "modeling",
  modelingFeedback: "modelingFeedback",
  mouseTracking: "mouseTracking",
  move: "move",
  moveCanvas: "moveCanvas",
  movePreview: "movePreview",
  originalPaletteProvider: "originalPaletteProvider",
  outline: "outline",
  overlays: "overlays",
  palette: "palette",
  paletteProvider: "paletteProvider",
  pathMap: "pathMap",
  popupMenu: "popupMenu",
  previewSupport: "previewSupport",
  propertiesPanel: "propertiesPanel",
  propertiesProvider: "propertiesProvider",
  removeElementBehavior: "removeElementBehavior",
  removeParticipantBehavior: "removeParticipantBehavior",
  replace: "replace",
  replaceConnectionBehavior: "replaceConnectionBehavior",
  replaceElementBehaviour: "replaceElementBehaviour",
  replaceMenuProvider: "replaceMenuProvider",
  resize: "resize",
  resizeHandles: "resizeHandles",
  resizeLaneBehavior: "resizeLaneBehavior",
  resizePreview: "resizePreview",
  rules: "rules",
  searchPad: "searchPad",
  selection: "selection",
  selectionBehavior: "selectionBehavior",
  selectionVisuals: "selectionVisuals",
  snapping: "snapping",
  spaceTool: "spaceTool",
  spaceToolPreview: "spaceToolPreview",
  styles: "styles",
  toggleElementCollapseBehaviour: "toggleElementCollapseBehaviour",
  toolManager: "toolManager",
  tooltips: "tooltips",
  touchFix: "touchFix",
  touchInteractionEvents: "touchInteractionEvents",
  translate: "translate",
  unclaimIdBehavior: "unclaimIdBehavior",
  unsetDefaultFlowBehavior: "unsetDefaultFlowBehavior",
  updateFlowNodeRefsBehavior: "updateFlowNodeRefsBehavior",
  zoomScroll: "zoomScroll",
};

export const Modeler = _Modeler;
export const PropertiesPanelModule = _PropertiesPanelModule;
export const EntryFactory = _EntryFactory;
export const OriginalPaletteProvider = _PaletteProvider;
export const OriginalPropertiesProvider = _BpmnPropertiesProvider;

export interface IPaletteProvider {
  getPaletteEntries(): any;
}

export interface IPalette {
  registerProvider(provider: IPaletteProvider): any;
}

export interface IPropertiesProvider {
  getTabs(elemnt): any;
}
