0000] in <filename unknown>:0 
  at com.tencent.pandora.Logger..cctor () [0x00000] in <filename unknown>:0 
  at com.tencent.pandora.Logger..cctor () [0x00000] in <filename unknown>:0 
  at com.tencent.pandora.Logger..cctor () [0x00000] in <filename unknown>:0 
  at BuffEffectBehavior.OnBegin () [0x00000] in <filename unknown>:0 
  at QSBuffBehavior.Update (Single deltaTime) [0x00000] in <filename unknown>:0 
  at BuffBehaviorPackage.Update (Single deltaTime) [0x00000] in <filename unknown>:0 
  at BuffBehaviorProcessor.AddBuff (.BuffInstance inst, Int32 behaviorId, Boolean silent, Boolean reactive) [0x00000] in <filename unknown>:0 
  at Player.OnBuffChange (.BuffInstance inst, EBuffChangeType type, Boolean silent, Boolean forceStop) [0x00000] in <filename unknown>:0 
  at BaseInfo.AddBuff (.BuffInstance inst, Boolean restore, Boolean silent) [0x00000] in <filename unknown>:0 
  at Player.SyncBuffInfo (IList`1 buffs) [0x00000] in <filename unknown>:0 
  at Modules.MMO.BuffAndCDModel.<MsgEvents>m__2 (Int32 msgId, IMessage msg) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.DispatchMsg (Int32 msgId, IMessage msgForCs, Net.LuaProtobufBytes msgForLua) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.ProcessQueueMessage (Net.MessageData message) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.DispatchQueueMsgs () [0x00000] in <filename unknown>:0 
  at NetSystem.Update () [0x00000] in <filename unknown>:0 
  at GameManager.Update () [0x00000] in <filename unknown>:0 
  at QSGamePortal.Update () [0x00000] in <filename unknown>:0 
  at Google.Protobuf.JsonFormatter..ctor (Google.Protobuf.Settings settings) [0x00000] in <filename unknown>:0 
  at ZXing.Common.DecodingOptions+ChangeNotifyDictionary`2[TKey,TValue].set_Item (.TKey key, .TValue value) [0x00000] in <filename unknown>:0 

====ERROR OVER====

[10/5/2024 9:14:32 PM][ERROR]
NullReferenceException: A null value was found where an object instance was required.
System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, System.Globalization.CultureInfo culture, System.Object value, System.Type destinationType)
System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, System.Globalization.CultureInfo culture, System.Object value, System.Type destinationType)
com.tencent.pandora.Logger..cctor ()
com.tencent.pandora.Logger..cctor ()
com.tencent.pandora.Logger..cctor ()
MutlLang.LanguageTypeConverter.ConvertAssetPathToOtherLanguage (System.String path, LanguageType targetLanguageType)
EffectProxyMgr.TryGetLocalizationPath (System.String str)
EffectProxyMgr.CreateProxyInternal (System.String fxPath, System.Object creatorObj, EffectCreateType type, System.Action`1 createObjCb, Boolean isMustCreateImm, Boolean isCanNotCreate, Boolean isAsync, UnityEngine.Transform speParent)
EffectProxyMgr.CreateProxyLOD (IFxNameWithSquare effectBehavior, System.Object CreaterObj, EffectCreateType type, System.Action`1 CreateObjCb, Boolean isMustCreateImm, Boolean IsCanNotCreate, Boolean isAsync, UnityEngine.Transform _SpeParent, Boolean isMainPlayer)
EffectProxyMgr.CreateProxyByRuntimeData (.EffectRuntimeData data, EffectCreateType type, System.Action`1 CreateObjCb, UnityEngine.GameObject holder, Boolean isMustCreateImm, Boolean isCanNotCreate, Boolean isAsync)
BuffEffectBehavior.OnConstruct (.BuffBehaviorContext context)
QSBehaviorFactory.Create[T] (.BuffBehaviorContext context, DataTable.Gen.BaseBehavior behavior)
BuffBehaviorPackage.InstanceBuffBehavior[T] (.BuffBehaviorContext context, DataTable.Gen.BuffBehaviorAtomOptimized atom)
BuffBehaviorPackage.Recycle (.BuffBehaviorContext context, DataTable.Gen.BuffBehaviorAtomOptimized atom)
BuffBehaviorPackage.Create (.BuffBehaviorContext context, DataTable.Gen.BuffBehaviorAtomOptimized atom)
BuffBehaviorProcessor.AddBuff (.BuffInstance inst, Int32 behaviorId, Boolean silent, Boolean reactive)
Player.OnBuffChange (.BuffInstance inst, EBuffCha