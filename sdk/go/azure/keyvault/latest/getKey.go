// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupKey(ctx *pulumi.Context, args *LookupKeyArgs, opts ...pulumi.InvokeOption) (*LookupKeyResult, error) {
	var rv LookupKeyResult
	err := ctx.Invoke("azure-nextgen:keyvault/latest:getKey", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupKeyArgs struct {
	// The name of the key to be retrieved.
	KeyName string `pulumi:"keyName"`
	// The name of the resource group which contains the specified key vault.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the vault which contains the key to be retrieved.
	VaultName string `pulumi:"vaultName"`
}

// The key resource.
type LookupKeyResult struct {
	// The attributes of the key.
	Attributes *KeyAttributesResponse `pulumi:"attributes"`
	// The elliptic curve name. For valid values, see JsonWebKeyCurveName.
	CurveName *string `pulumi:"curveName"`
	// Fully qualified identifier of the key vault resource.
	Id     string   `pulumi:"id"`
	KeyOps []string `pulumi:"keyOps"`
	// The key size in bits. For example: 2048, 3072, or 4096 for RSA.
	KeySize *int `pulumi:"keySize"`
	// The URI to retrieve the current version of the key.
	KeyUri string `pulumi:"keyUri"`
	// The URI to retrieve the specific version of the key.
	KeyUriWithVersion string `pulumi:"keyUriWithVersion"`
	// The type of the key. For valid values, see JsonWebKeyType.
	Kty *string `pulumi:"kty"`
	// Azure location of the key vault resource.
	Location string `pulumi:"location"`
	// Name of the key vault resource.
	Name string `pulumi:"name"`
	// Tags assigned to the key vault resource.
	Tags map[string]string `pulumi:"tags"`
	// Resource type of the key vault resource.
	Type string `pulumi:"type"`
}
