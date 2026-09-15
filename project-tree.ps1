function Show-Tree($Path = ".", $Indent = "") {
    Get-ChildItem $Path | Where-Object { $_.Name -notin @('node_modules', '.next', '.git') } | ForEach-Object {
        Write-Output "$Indent$($_.Name)"
        if ($_.PSIsContainer) {
            Show-Tree $_.FullName "$Indent  "
        }
    }
}
# CMD FOR TREE Show-Tree