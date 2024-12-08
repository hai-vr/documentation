---
unlisted: true
---

# 2024-12-08 他のアプリケーションでModular Avatarを動かす方法

- **[Open article in English](./modular-avatar-on-other-apps)**

:::warning
このページは主に2024年12月8日に作成されました。以下の情報はすぐに陳腐化する可能性があります。<br/>
このページはChatGPTを使用して翻訳されています。翻訳に誤りが生じる可能性があります。
:::

こんにちは。他のアプリケーション（VRChat以外）でModular Avatarを動かそうとする場合に得た知見を共有します。

### Modular Avatar V1.xはほぼ他アプリと互換性あり

Modular Avatar V1.xは、VRChat以外のアプリでもほぼ互換性がありますが、一部のVRChat特有の機能は削除されます。

これは、プロジェクト内でVRChat SDKが検出されない場合、Modular AvatarではVRChat特有のコードが既に無効化されるためです。

例えば、[MA Merge Armature](https://modular-avatar.nadena.dev/docs/reference/merge-armature)は汎用的で動作しますが、[MA Menu Item](https://modular-avatar.nadena.dev/docs/reference/menu-item)はVRChat特有であるため動作しません。

以下のセクションは、互換性を確保するために必要な作業について説明しています。

### Modular Avatarは一部のリリースでコンパイルエラーが発生することがある

Modular Avatarは*公式には*VRChatプラットフォームのみをサポートしているため、一部のリリースではVRChatなしのコードパスが見落とされ、コンパイルエラーが発生することがあります。

この問題を解決するには、`#if MA_VRCSDK3_AVATARS`および`#endif`を適切な場所に追加し、VRChat特有のインポート、フィールド宣言、またはコードブロック全体をコンパイラが無視するようにする必要があります。

何かが`context.AvatarDescriptor`を必要とする場合、その関数のほとんどの内容をコンパイルから削除できると仮定できます。

[このプルリクエスト](https://github.com/bdunderscore/modular-avatar/pull/1232/files)を例として参照してください。

### ALCOMやVCCを使用している場合、Modular AvatarをインストールするとVRChat SDKもインストールされる

VCCやALCOMを通じてModular Avatar V1.xをインストールすると、プロジェクトにVRChat SDKもインストールされます。
これは望ましくありません。VRChat以外のプロジェクトにVRChat SDKを含めてはいけません。VRChat SDKはプロジェクト設定やビルドプロセス（レイヤー名、XRプロジェクト設定など）を汚染し、ターゲットアプリの機能に干渉します。

[ALCOM](https://vrc-get.anatawa12.com/alcom/)パッケージマネージャーを使用している場合、次の手順を実行できます：
- Unityプロジェクトを閉じる
- Modular Avatarをインストールする
- VRChat SDK Avatarsパッケージをアンインストールする
- VRChat SDK Baseパッケージをアンインストールする

VCCを使用している場合、一度インストールされたVRChat SDKパッケージをアンインストールすることはできません。非VRChatプロジェクトではALCOMに切り替えるか、ソースから手動でModular Avatarをインストールしてください。また、NDMFをインストールする必要があります。

ALCOMもVCCも使用していない場合、ソースから直接インストールできます。この場合もNDMFをインストールする必要があります。

将来的には、Modular Avatar V2.xをインストールしてもVRChat SDKがプロジェクトにインストールされなくなると聞いています。

### Modular AvatarはDLLに依存する

Modular Avatarはプロジェクト内にDLLを必要としますが、これらは通常VRChat SDKによって提供されます。

これらのDLLはChilloutVRやBasisなどの他のプロジェクトには欠けていることが多いです。

[Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins)をALCOMを通じてインストールするか、Microsoft NuGetから以下のDLLを手動でインストールしてください（[System.Collections.Immutable](https://www.nuget.org/packages/System.Collections.Immutable/)、[Lib.Harmony](https://www.nuget.org/packages/Lib.Harmony/)）。

必要なDLL：
- System.Collections.Immutable DLL（NDMFで使用）
- Lib.Harmony DLL（NDMF 1.5で使用）

### Modular AvatarはUnity Burstパッケージに依存する

Modular Avatarはプロジェクト内にUnity Burstパッケージを必要とします。これは通常VRChat SDKによって自動的に含まれます。

[Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins)をALCOMを通じてインストールするか、UnityのパッケージマネージャーでBurstをプロジェクトに追加してください。

### NDMFをビルドプロセスに接続する

Modular Avatarがアバターをビルド中に動作するようにするには、NDMFをビルドプロセスに接続する必要があります。

ChilloutVRアプリケーションでは、[Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins)内でこれを実装しました（ALCOMを通じてインストール）。[このコード](https://github.com/hai-vr/chillaxins/blob/main/Packages/dev.hai-vr.chillaxins/Scripts/Editor/ChillaxinsPreBuildAvatar.cs#L51)を参照してください。

Basisフレームワークでは、[このコード](https://github.com/dooly123/Basis/blob/main/Packages/HVRBasisNDMF/Scripts/Editor/BasisNDMFBuildHook.cs#L13)を参照してください。これはBasisのソースコード自体にすでに含まれています。
