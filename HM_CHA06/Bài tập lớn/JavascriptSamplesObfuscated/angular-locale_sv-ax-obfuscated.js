  at NetSystem.Update () [0x00000] in <filename unknown>:0 
  at GameManager.Update () [0x00000] in <filename unknown>:0 
  at QSGamePortal.Update () [0x00000] in <filename unknown>:0 
  at Google.Protobuf.JsonFormatter..ctor (Google.Protobuf.Settings settings) [0x00000] in <filename unknown>:0 
  at ZXing.Common.DecodingOptions+ChangeNotifyDictionary`2[TKey,TValue].set_Item (.TKey key, .TValue value) [0x00000] in <filename unknown>:0 

====ERROR OVER====

[10/5/2024 9:16:51 PM][ERROR]
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
Player.OnBuffChange (.BuffInstance inst, EBuffChangeType type, Boolean silent, Boolean forceStop)
BaseInfo.AddBuff (.BuffInstance inst, Boolean restore, Boolean silent)
Player.SyncBuffInfo (IList`1 buffs)
Modules.MMO.BuffAndCDModel.<MsgEvents>m__2 (Int32 msgId, IMessage msg)
Net.NetConnectionHelper.DispatchMsg (Int32 msgId, IMessage msgForCs, Net.LuaProtobufBytes msgForLua)
Net.NetConnectionHelper.ProcessQueueMessage (Net.MessageData message)
Net.NetConnectionHelper.DispatchQueueMsgs ()
NetSystem.Update ()
GameManager.Update ()
QSGamePortal.Update ()
Google.Protobuf.JsonFormatter..ctor (Google.Protobuf.Settings settings)
ZXing.Common.DecodingOptions+ChangeNotifyDictionary`2[TKey,TValue].set_Item (.TKey key, .TValue value)
UnityEngine.StackTraceUtility:ExtractStringFromExceptionInternal(Object