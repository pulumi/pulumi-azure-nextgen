// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// SSL certificate for an app.
type Certificate struct {
	pulumi.CustomResourceState

	// CNAME of the certificate to be issued via free certificate
	CanonicalName pulumi.StringPtrOutput `pulumi:"canonicalName"`
	// Raw bytes of .cer file
	CerBlob pulumi.StringOutput `pulumi:"cerBlob"`
	// Certificate expiration date.
	ExpirationDate pulumi.StringOutput `pulumi:"expirationDate"`
	// Friendly name of the certificate.
	FriendlyName pulumi.StringOutput `pulumi:"friendlyName"`
	// Host names the certificate applies to.
	HostNames pulumi.StringArrayOutput `pulumi:"hostNames"`
	// Specification for the App Service Environment to use for the certificate.
	HostingEnvironmentProfile HostingEnvironmentProfileResponseOutput `pulumi:"hostingEnvironmentProfile"`
	// Certificate issue Date.
	IssueDate pulumi.StringOutput `pulumi:"issueDate"`
	// Certificate issuer.
	Issuer pulumi.StringOutput `pulumi:"issuer"`
	// Key Vault Csm resource Id.
	KeyVaultId pulumi.StringPtrOutput `pulumi:"keyVaultId"`
	// Key Vault secret name.
	KeyVaultSecretName pulumi.StringPtrOutput `pulumi:"keyVaultSecretName"`
	// Status of the Key Vault secret.
	KeyVaultSecretStatus pulumi.StringOutput `pulumi:"keyVaultSecretStatus"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Certificate password.
	Password pulumi.StringOutput `pulumi:"password"`
	// Pfx blob.
	PfxBlob pulumi.StringPtrOutput `pulumi:"pfxBlob"`
	// Public key hash.
	PublicKeyHash pulumi.StringOutput `pulumi:"publicKeyHash"`
	// Self link.
	SelfLink pulumi.StringOutput `pulumi:"selfLink"`
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId pulumi.StringPtrOutput `pulumi:"serverFarmId"`
	// App name.
	SiteName pulumi.StringOutput `pulumi:"siteName"`
	// Subject name of the certificate.
	SubjectName pulumi.StringOutput `pulumi:"subjectName"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Certificate thumbprint.
	Thumbprint pulumi.StringOutput `pulumi:"thumbprint"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// Is the certificate valid?.
	Valid pulumi.BoolOutput `pulumi:"valid"`
}

// NewCertificate registers a new resource with the given unique name, arguments, and options.
func NewCertificate(ctx *pulumi.Context,
	name string, args *CertificateArgs, opts ...pulumi.ResourceOption) (*Certificate, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.Password == nil {
		return nil, errors.New("invalid value for required argument 'Password'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/v20150801:Certificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160301:Certificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:Certificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:Certificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:Certificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:Certificate"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200901:Certificate"),
		},
	})
	opts = append(opts, aliases)
	var resource Certificate
	err := ctx.RegisterResource("azure-nextgen:web/latest:Certificate", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCertificate gets an existing Certificate resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCertificate(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CertificateState, opts ...pulumi.ResourceOption) (*Certificate, error) {
	var resource Certificate
	err := ctx.ReadResource("azure-nextgen:web/latest:Certificate", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Certificate resources.
type certificateState struct {
	// CNAME of the certificate to be issued via free certificate
	CanonicalName *string `pulumi:"canonicalName"`
	// Raw bytes of .cer file
	CerBlob *string `pulumi:"cerBlob"`
	// Certificate expiration date.
	ExpirationDate *string `pulumi:"expirationDate"`
	// Friendly name of the certificate.
	FriendlyName *string `pulumi:"friendlyName"`
	// Host names the certificate applies to.
	HostNames []string `pulumi:"hostNames"`
	// Specification for the App Service Environment to use for the certificate.
	HostingEnvironmentProfile *HostingEnvironmentProfileResponse `pulumi:"hostingEnvironmentProfile"`
	// Certificate issue Date.
	IssueDate *string `pulumi:"issueDate"`
	// Certificate issuer.
	Issuer *string `pulumi:"issuer"`
	// Key Vault Csm resource Id.
	KeyVaultId *string `pulumi:"keyVaultId"`
	// Key Vault secret name.
	KeyVaultSecretName *string `pulumi:"keyVaultSecretName"`
	// Status of the Key Vault secret.
	KeyVaultSecretStatus *string `pulumi:"keyVaultSecretStatus"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Location.
	Location *string `pulumi:"location"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// Certificate password.
	Password *string `pulumi:"password"`
	// Pfx blob.
	PfxBlob *string `pulumi:"pfxBlob"`
	// Public key hash.
	PublicKeyHash *string `pulumi:"publicKeyHash"`
	// Self link.
	SelfLink *string `pulumi:"selfLink"`
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId *string `pulumi:"serverFarmId"`
	// App name.
	SiteName *string `pulumi:"siteName"`
	// Subject name of the certificate.
	SubjectName *string `pulumi:"subjectName"`
	// The system metadata relating to this resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Certificate thumbprint.
	Thumbprint *string `pulumi:"thumbprint"`
	// Resource type.
	Type *string `pulumi:"type"`
	// Is the certificate valid?.
	Valid *bool `pulumi:"valid"`
}

type CertificateState struct {
	// CNAME of the certificate to be issued via free certificate
	CanonicalName pulumi.StringPtrInput
	// Raw bytes of .cer file
	CerBlob pulumi.StringPtrInput
	// Certificate expiration date.
	ExpirationDate pulumi.StringPtrInput
	// Friendly name of the certificate.
	FriendlyName pulumi.StringPtrInput
	// Host names the certificate applies to.
	HostNames pulumi.StringArrayInput
	// Specification for the App Service Environment to use for the certificate.
	HostingEnvironmentProfile HostingEnvironmentProfileResponsePtrInput
	// Certificate issue Date.
	IssueDate pulumi.StringPtrInput
	// Certificate issuer.
	Issuer pulumi.StringPtrInput
	// Key Vault Csm resource Id.
	KeyVaultId pulumi.StringPtrInput
	// Key Vault secret name.
	KeyVaultSecretName pulumi.StringPtrInput
	// Status of the Key Vault secret.
	KeyVaultSecretStatus pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Location.
	Location pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// Certificate password.
	Password pulumi.StringPtrInput
	// Pfx blob.
	PfxBlob pulumi.StringPtrInput
	// Public key hash.
	PublicKeyHash pulumi.StringPtrInput
	// Self link.
	SelfLink pulumi.StringPtrInput
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId pulumi.StringPtrInput
	// App name.
	SiteName pulumi.StringPtrInput
	// Subject name of the certificate.
	SubjectName pulumi.StringPtrInput
	// The system metadata relating to this resource.
	SystemData SystemDataResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Certificate thumbprint.
	Thumbprint pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// Is the certificate valid?.
	Valid pulumi.BoolPtrInput
}

func (CertificateState) ElementType() reflect.Type {
	return reflect.TypeOf((*certificateState)(nil)).Elem()
}

type certificateArgs struct {
	// CNAME of the certificate to be issued via free certificate
	CanonicalName *string `pulumi:"canonicalName"`
	// Host names the certificate applies to.
	HostNames []string `pulumi:"hostNames"`
	// Key Vault Csm resource Id.
	KeyVaultId *string `pulumi:"keyVaultId"`
	// Key Vault secret name.
	KeyVaultSecretName *string `pulumi:"keyVaultSecretName"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Location.
	Location string `pulumi:"location"`
	// Name of the certificate.
	Name string `pulumi:"name"`
	// Certificate password.
	Password string `pulumi:"password"`
	// Pfx blob.
	PfxBlob *string `pulumi:"pfxBlob"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId *string `pulumi:"serverFarmId"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Certificate resource.
type CertificateArgs struct {
	// CNAME of the certificate to be issued via free certificate
	CanonicalName pulumi.StringPtrInput
	// Host names the certificate applies to.
	HostNames pulumi.StringArrayInput
	// Key Vault Csm resource Id.
	KeyVaultId pulumi.StringPtrInput
	// Key Vault secret name.
	KeyVaultSecretName pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Location.
	Location pulumi.StringInput
	// Name of the certificate.
	Name pulumi.StringInput
	// Certificate password.
	Password pulumi.StringInput
	// Pfx blob.
	PfxBlob pulumi.StringPtrInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
	ServerFarmId pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (CertificateArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*certificateArgs)(nil)).Elem()
}

type CertificateInput interface {
	pulumi.Input

	ToCertificateOutput() CertificateOutput
	ToCertificateOutputWithContext(ctx context.Context) CertificateOutput
}

func (Certificate) ElementType() reflect.Type {
	return reflect.TypeOf((*Certificate)(nil)).Elem()
}

func (i Certificate) ToCertificateOutput() CertificateOutput {
	return i.ToCertificateOutputWithContext(context.Background())
}

func (i Certificate) ToCertificateOutputWithContext(ctx context.Context) CertificateOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CertificateOutput)
}

type CertificateOutput struct {
	*pulumi.OutputState
}

func (CertificateOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*CertificateOutput)(nil)).Elem()
}

func (o CertificateOutput) ToCertificateOutput() CertificateOutput {
	return o
}

func (o CertificateOutput) ToCertificateOutputWithContext(ctx context.Context) CertificateOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(CertificateOutput{})
}
