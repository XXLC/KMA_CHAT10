t_Item (.TKey key, .TValue value) [0x00000] in <filename unknown>:0 

====ERROR OVER====

[10/5/2024 9:29:36 PM][ERROR]
AssetBundleSyncLoadProgress.CheckDone : A null value was found where an object instance was required.
  at System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, System.Globalization.CultureInfo culture, System.Object value, System.Type destinationType) [0x00000] in <filename unknown>:0 
  at System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, System.Globalization.CultureInfo culture, System.Object value, System.Type destinationType) [0x00000] in <filename unknown>:0 
  at com.tencent.pandora.Logger..cctor () [0x00000] in <filename unknown>:0 
  at com.tencent.pandora.Logger..cctor () [0x00000] in <filename unknown>:0 
  at com.tencent.pandora.Logger..cctor () [0x00000] in <filename unknown>:0 
  at UIBossWordEffect.SetWordText (DataTable.Gen.BossSkillNameEffectBehavior effectBehavior, Boolean hasBgEffect) [0x00000] in <filename unknown>:0 
  at BossSkillNameProcessor.InitEffect () [0x00000] in <filename unknown>:0 
  at BossSkillNameProcessor.BGObjLoaded (System.Object o, .ResourceLoadUserData userdata) [0x00000] in <filename unknown>:0 
  at AssetBundleSyncLoadProgress.CheckDone () [0x00000] in <filename unknown>:0 
  at ResourceManager.AdvanceTime (Single passTime) [0x00000] in <filename unknown>:0 
  at WorldClock.AdvanceTime () [0x00000] in <filename unknown>:0 
  at GameManager.Update () [0x00000] in <filename unknown>:0 
  at QSGamePortal.Update () [0x00000] in <filename unknown>:0 
  at Google.Protobuf.JsonFormatter..ctor (Google.Protobuf.Settings settings) [0x00000] in <filename unknown>:0 
  at ZXing.Common.DecodingOptions+ChangeNotifyDictionary`2[TKey,TValue].set_Item (.TKey key, .TValue value) [0x00000] in <filename unknown>:0 

====ERROR OVER====

[10/5/2024 9:29:42 PM][ERROR]
NullReferenceException: A null value was found where an object instance was required.
System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, Syst