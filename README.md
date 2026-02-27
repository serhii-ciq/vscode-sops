# @s2504s/vscode-sops

> Transparent encryption & decryption of [SOPS](https://github.com/getsops/sops)-managed secrets directly in VS Code and Cursor.

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/s2504s.s2504s-vscode-sops?label=VS%20Code%20Marketplace&logo=visualstudiocode&color=007ACC)](https://marketplace.visualstudio.com/items?itemName=s2504s.s2504s-vscode-sops)
[![Open VSX](https://img.shields.io/open-vsx/v/s2504s/s2504s-vscode-sops?label=Open%20VSX&color=a60ee5)](https://open-vsx.org/extension/s2504s/s2504s-vscode-sops)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

---

## ✨ Features

- **Real-time editing** of encrypted `yaml`, `json`, `dotenv`, `ini`, `plaintext` and `binary` files in-place
- **Auto-encrypt on save** — edits are transparently re-encrypted back to the original file
- **Toggle view** — one-click switch between encrypted and decrypted versions via the status bar
- **Creation rules** — create new encrypted files using `.sops.yaml` `creation_rules`
- **Multiple key providers** — AWS KMS, GCP KMS, Azure Key Vault, AGE, PGP
- Works with SOPS binaries installed via [aquaproj/aqua](https://aquaproj.github.io/)

---

## 📦 Installation

### From Marketplace

- **VS Code:** [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=s2504s.s2504s-vscode-sops)
- **Cursor / VS Code forks:** [Open VSX](https://open-vsx.org/extension/s2504s/s2504s-vscode-sops)

### From `.vsix`

```bash
code --install-extension s2504s-vscode-sops-*.vsix
# or
cursor --install-extension s2504s-vscode-sops-*.vsix
```

---

## ⚙️ Requirements

1. Install [SOPS](https://github.com/getsops/sops/releases) and ensure `sops` is available in `$PATH`
2. *(Optional)* For `.env` support install the [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) extension

> 🎬 New to SOPS? Check out this [tutorial on YouTube](https://www.youtube.com/watch?v=V2PRhxphH2w)

---

## 🔧 Extension Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `sops.enabled` | `boolean` | `true` | Enable / disable the extension |
| `sops.beta` | `boolean` | `false` | Switch between stable and beta release at runtime |
| `sops.binPath` | `string` | `sops` | Path to the SOPS binary |
| `sops.configPath` | `string` | `./.sopsrc` | Path to the [config file](#-config-file) (absolute or relative) |
| `sops.creationEnabled` | `boolean` | `false` | Encrypt new files matching `.sops.yaml` `creation_rules` |
| `sops.defaults.awsProfile` | `string` | — | AWS profile for `--aws-profile` (falls back to `$AWS_PROFILE`) |
| `sops.defaults.gcpCredentialsPath` | `string` | — | GCP credentials path (falls back to `$GOOGLE_APPLICATION_CREDENTIALS`) |
| `sops.defaults.ageKeyFile` | `string` | — | AGE key file path (falls back to `$SOPS_AGE_KEY_FILE`) |
| `sops.defaults.ignoreMac` | `boolean` | `false` | Skip MAC verification |
| `sops.defaults.macOnlyEncrypted` | `boolean` | `false` | Compute MAC only over encrypted values |

---

## 📄 Config file

Project-level config file named `.sopsrc` (YAML format) in the workspace root:

```yaml
awsProfile: my-profile-1
gcpCredentialsPath: /home/user/Downloads/my-key.json
ageKeyFile: /home/user/age.txt
```

---

## 🛠 Development

### Prerequisites

- Node.js LTS (currently 22.x)
- `npm ci` to install dependencies

### Build and lint

```bash
npm run compile   # Compile TypeScript → out/
npm run lint      # Run ESLint
npm run watch     # Compile in watch mode
```

### Release process

1. **Bump version** in `package.json` (follow [semver](https://semver.org/))
2. Run `npm install` to update `package-lock.json`
3. Add an entry to `CHANGELOG.md`
4. Merge to `master` — CI/CD will automatically:
   - Build and lint the extension
   - Publish to [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=s2504s.s2504s-vscode-sops) and [Open VSX](https://open-vsx.org/extension/s2504s/s2504s-vscode-sops)

### Manual publish (if needed)

```bash
npx vsce package                      # Build .vsix artifact
npx vsce publish -p <VSCE_TOKEN>      # Publish to VS Code Marketplace
npx ovsx publish -p <OVSX_TOKEN>      # Publish to Open VSX
```

| Tool   | Purpose              | Install                      |
|--------|----------------------|------------------------------|
| `vsce` | VS Marketplace CLI   | bundled in devDependencies   |
| `ovsx` | Open VSX CLI         | `npm install -g ovsx`        |

---

## 📚 References

- [Publishing VS Code Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Publishing to Open VSX](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions)
- [SOPS documentation](https://github.com/getsops/sops)

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full version history.

## 🐛 Issues

Found a bug? [Open an issue](https://github.com/s2504s/vscode-sops/issues).

---

## 📜 License

[MIT](LICENSE.md)
