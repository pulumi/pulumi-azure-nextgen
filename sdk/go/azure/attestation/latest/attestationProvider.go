// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Attestation service response message.
type AttestationProvider struct {
	pulumi.CustomResourceState

	// Gets the uri of attestation service
	AttestUri pulumi.StringPtrOutput `pulumi:"attestUri"`
	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Status of attestation service.
	Status pulumi.StringPtrOutput `pulumi:"status"`
	// The system metadata relating to this resource
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Trust model for the attestation service instance.
	TrustModel pulumi.StringPtrOutput `pulumi:"trustModel"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewAttestationProvider registers a new resource with the given unique name, arguments, and options.
func NewAttestationProvider(ctx *pulumi.Context,
	name string, args *AttestationProviderArgs, opts ...pulumi.ResourceOption) (*AttestationProvider, error) {
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.Properties == nil {
		return nil, errors.New("missing required argument 'Properties'")
	}
	if args == nil || args.ProviderName == nil {
		return nil, errors.New("missing required argument 'ProviderName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &AttestationProviderArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:attestation/v20180901preview:AttestationProvider"),
		},
		{
			Type: pulumi.String("azure-nextgen:attestation/v20201001:AttestationProvider"),
		},
	})
	opts = append(opts, aliases)
	var resource AttestationProvider
	err := ctx.RegisterResource("azure-nextgen:attestation/latest:AttestationProvider", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAttestationProvider gets an existing AttestationProvider resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAttestationProvider(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AttestationProviderState, opts ...pulumi.ResourceOption) (*AttestationProvider, error) {
	var resource AttestationProvider
	err := ctx.ReadResource("azure-nextgen:attestation/latest:AttestationProvider", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AttestationProvider resources.
type attestationProviderState struct {
	// Gets the uri of attestation service
	AttestUri *string `pulumi:"attestUri"`
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// Status of attestation service.
	Status *string `pulumi:"status"`
	// The system metadata relating to this resource
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Trust model for the attestation service instance.
	TrustModel *string `pulumi:"trustModel"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type AttestationProviderState struct {
	// Gets the uri of attestation service
	AttestUri pulumi.StringPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// Status of attestation service.
	Status pulumi.StringPtrInput
	// The system metadata relating to this resource
	SystemData SystemDataResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Trust model for the attestation service instance.
	TrustModel pulumi.StringPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (AttestationProviderState) ElementType() reflect.Type {
	return reflect.TypeOf((*attestationProviderState)(nil)).Elem()
}

type attestationProviderArgs struct {
	// The supported Azure location where the attestation service instance should be created.
	Location string `pulumi:"location"`
	// Properties of the attestation service instance
	Properties AttestationServiceCreationSpecificParams `pulumi:"properties"`
	// Name of the attestation service instance.
	ProviderName string `pulumi:"providerName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The tags that will be assigned to the attestation service instance.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a AttestationProvider resource.
type AttestationProviderArgs struct {
	// The supported Azure location where the attestation service instance should be created.
	Location pulumi.StringInput
	// Properties of the attestation service instance
	Properties AttestationServiceCreationSpecificParamsInput
	// Name of the attestation service instance.
	ProviderName pulumi.StringInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The tags that will be assigned to the attestation service instance.
	Tags pulumi.StringMapInput
}

func (AttestationProviderArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*attestationProviderArgs)(nil)).Elem()
}

type AttestationProviderInput interface {
	pulumi.Input

	ToAttestationProviderOutput() AttestationProviderOutput
	ToAttestationProviderOutputWithContext(ctx context.Context) AttestationProviderOutput
}

func (AttestationProvider) ElementType() reflect.Type {
	return reflect.TypeOf((*AttestationProvider)(nil)).Elem()
}

func (i AttestationProvider) ToAttestationProviderOutput() AttestationProviderOutput {
	return i.ToAttestationProviderOutputWithContext(context.Background())
}

func (i AttestationProvider) ToAttestationProviderOutputWithContext(ctx context.Context) AttestationProviderOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AttestationProviderOutput)
}

type AttestationProviderOutput struct {
	*pulumi.OutputState
}

func (AttestationProviderOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AttestationProviderOutput)(nil)).Elem()
}

func (o AttestationProviderOutput) ToAttestationProviderOutput() AttestationProviderOutput {
	return o
}

func (o AttestationProviderOutput) ToAttestationProviderOutputWithContext(ctx context.Context) AttestationProviderOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(AttestationProviderOutput{})
}