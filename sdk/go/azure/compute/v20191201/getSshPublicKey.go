// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSshPublicKey(ctx *pulumi.Context, args *LookupSshPublicKeyArgs, opts ...pulumi.InvokeOption) (*LookupSshPublicKeyResult, error) {
	var rv LookupSshPublicKeyResult
	err := ctx.Invoke("azure-nextgen:compute/v20191201:getSshPublicKey", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupSshPublicKeyArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the SSH public key.
	SshPublicKeyName string `pulumi:"sshPublicKeyName"`
}

// Specifies information about the SSH public key.
type LookupSshPublicKeyResult struct {
	// Resource Id
	Id string `pulumi:"id"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format.
	PublicKey *string `pulumi:"publicKey"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
