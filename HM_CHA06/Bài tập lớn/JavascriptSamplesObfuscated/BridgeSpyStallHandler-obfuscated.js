ctionHelper.DispatchMsg (Int32 msgId, IMessage msgForCs, Net.LuaProtobufBytes msgForLua) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.ProcessQueueMessage (Net.MessageData message) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.DispatchQueueMsgs () [0x00000] in <filename unknown>:0 
  at NetSystem.Update () [0x00000] in <filename unknown>:0 
  at GameManager.Update () [0x00000] in <filename unknown>:0 
  at QSGamePortal.Update () [0x00000] in <filename unknown>:0 
  at Google.Protobuf.JsonFormatter..ctor (Google.Protobuf.Settings settings) [0x00000] in <filename unknown>:0 
  at ZXing.Common.DecodingOptions+ChangeNotifyDictionary`2[TKey,TValue].set_Item (.TKey key, .TValue value) [0x00000] in <filename unknown>:0 

====ERROR OVER====

[10/5/2024 9:30:15 PM][ERROR]
NullReferenceException: A null value was found where an object instance was required.
System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, System.Globalization.CultureInfo culture, System.Object value, System.Type destinationType)
System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, System.Globalization.CultureInfo culture, System.Object value, System.Type destinationType)
com.tencent.pandora.Logger..cctor ()
com.tencent.pandora.Logger..cctor ()
com.tencent.pandora.Logger..cctor ()
MutlLang.LanguageTypeConverter.ConvertAssetPathToOtherLanguage (System.String path, LanguageType targetLanguageType)
EffectProxyMgr.TryGetLocalizationPath (System.String str)
EffectProxyMgr.CreateProxyInternal (System.String fxPath, System.Object creatorObj, EffectCreateType type, System.Action`1 createObjCb, Boolean isMustCreateImm, Boolean isCanNotCreate, Boolean isAsync, UnityEngine.Transform speParent)
EffectProxyMgr.CreateProxyLOD (IFxNameWithSquare effectBehavior, System.Object CreaterObj, EffectCreate